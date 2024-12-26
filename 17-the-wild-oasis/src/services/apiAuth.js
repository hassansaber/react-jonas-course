import supabase from "./supabase";

// SIGNUP
export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// Keep User logged In
export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error(sessionError.message);

  if (!session.session) return null;

  const { data, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  return data?.user;
}

// LOGOUT
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
