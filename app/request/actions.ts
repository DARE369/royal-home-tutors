'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function submitTutorRequest(data: {
  parentName: string;
  email: string;
  phone: string;
  childLevel: string;
  subjects: string;
  sessionsPerWeek: string;
  teachingMode: string;
  location?: string;
  notes?: string;
}) {
  const { error } = await supabase.from('tutor_requests').insert([
    {
      parent_name: data.parentName,
      email: data.email,
      phone: data.phone,
      child_level: data.childLevel,
      subjects: data.subjects,
      sessions_per_week: data.sessionsPerWeek,
      teaching_mode: data.teachingMode,
      location: data.location || null,
      notes: data.notes || null
    }
  ]);

  if (error) {
    console.error(error);
    throw new Error('Failed to submit tutor request');
  }
}
