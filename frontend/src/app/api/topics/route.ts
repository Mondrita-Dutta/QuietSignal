import { NextResponse } from 'next/server';
import { readDB, writeDB } from '../db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topicId = searchParams.get('id');

  const topics = await readDB('topics.json');
  const signal = await readDB('signals.json');

  const wallet = searchParams.get('wallet');

  if (!topicId) {
    // Filter topics by creator wallet if provided, to ensure data privacy between different issuers
    const filteredTopics = wallet
      ? topics.filter((c: any) => c.creator === wallet)
      : topics;

    // Attach response count to the filtered topics
    const enrichedTopics = filteredTopics.map((c: any) => ({
      ...c,
      responseCount: signal.filter((f: any) => f.topicId === c.id).length
    }));
    return NextResponse.json({ topics: enrichedTopics, success: true });
  }

  const topic = topics.find((c: any) => c.id === topicId);

  if (topic) {
    topic.responseCount = signal.filter((f: any) => f.topicId === topic.id).length;
    return NextResponse.json({ found: true, topic, success: true });
  }
  return NextResponse.json({ found: false, success: false }, { status: 404 });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const topics = await readDB('topics.json');

    // Generate a unique Topic ID
    const topicId = Math.random().toString(36).substring(2, 10).toUpperCase();

    const newTopic = {
      id: topicId,
      ...data,
      createdAt: new Date().toISOString(),
    };

    topics.push(newTopic);
    await writeDB('topics.json', topics);

    return NextResponse.json({ success: true, topic: newTopic });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create topic' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const topicId = searchParams.get('id');

    if (!topicId) {
      return NextResponse.json({ success: false, error: 'Topic ID required' }, { status: 400 });
    }

    const topics = await readDB('topics.json');
    const updatedTopics = topics.filter((c: any) => c.id !== topicId);

    if (topics.length === updatedTopics.length) {
      return NextResponse.json({ success: false, error: 'Topic not found' }, { status: 404 });
    }

    await writeDB('topics.json', updatedTopics);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete topic' }, { status: 500 });
  }
}
