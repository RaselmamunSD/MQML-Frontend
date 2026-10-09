import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Future backend integration hook for messages/email sending
    return NextResponse.json({
      success: true,
      message: 'Message delivered successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
