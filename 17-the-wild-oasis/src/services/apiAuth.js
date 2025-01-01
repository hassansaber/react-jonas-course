import supabase, { supabaseUrl } from "./supabase";

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

// UPDATE USER DATA
export async function updateCurrentUser({ fullName, password, avatar }) {
  let updatedData;
  if (password) updatedData = { password };
  if (fullName) updatedData = { data: { fullName } };

  // 1. Update password or fullName
  const { data: updatedUser, error: userError } =
    await supabase.auth.updateUser(updatedData);

  if (userError) throw new Error(userError.message);

  if (!avatar) return updatedUser;

  // 2. Upload avatar Image
  const fileName = `avatar-${updatedUser.id}-${Math.random()}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (uploadError) throw new Error(uploadError.message);

  // 3. Update avatar in the user
  const { data: avatarUpdatedUser, error: avatarUpdatedError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (avatarUpdatedError) throw new Error(avatarUpdatedError.message);

  return avatarUpdatedUser;
}
