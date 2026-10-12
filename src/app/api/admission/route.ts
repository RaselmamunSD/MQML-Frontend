import { NextResponse } from 'next/server';
import { z } from 'zod';

const admissionSchema = z.object({
  studentName: z.string().min(2, 'Name must be at least 2 characters'),
  dob: z.string().min(4, 'Valid date of birth is required'),
  gender: z.enum(['male', 'female']),
  desiredClass: z.string().min(1, 'Please select a class'),
  fatherName: z.string().min(2, 'Father name is required'),
  motherName: z.string().min(2, 'Mother name is required'),
  guardianPhone: z.string().min(10, 'Valid 11-digit mobile number is required'),
  guardianEmail: z.string().email().optional().or(z.literal('')),
  presentAddress: z.string().min(5, 'Present address is required'),
  previousInstitute: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = admissionSchema.safeParse(body);

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

    // Generate unique tracking ID: MQML-2026-XXXXX
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const trackingId = `MQML-2026-${randomCode}`;

    // Here a future backend service (e.g. FastAPI / Database) can be invoked:
    // const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/admissions`, { ... })

    return NextResponse.json({
      success: true,
      message: 'Admission application received successfully',
      applicationId: trackingId,
      submittedAt: new Date().toISOString(),
      studentName: result.data.studentName,
      desiredClass: result.data.desiredClass,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error processing admission',
      },
      { status: 500 }
    );
  }
}
