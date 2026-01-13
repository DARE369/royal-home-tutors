'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function submitTutorRequest(formData: {
  parentName: string;
  email: string;
  phone: string;
  childLevel: string;
  subjects: string;
  sessionsPerWeek: string;
  teachingMode: string;
  location: string;
  notes: string;
}) {
  try {
    const { data, error } = await supabase
      .from('requests')
      .insert([
        {
          parent_name: formData.parentName,
          email: formData.email,
          phone: formData.phone,
          child_level: formData.childLevel,
          subjects: formData.subjects,
          sessions_per_week: formData.sessionsPerWeek,
          teaching_mode: formData.teachingMode,
          location: formData.location,
          notes: formData.notes,
        },
      ]);

    if (error) throw error;

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
