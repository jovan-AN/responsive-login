import { createAsyncThunk } from "@reduxjs/toolkit";
import { newSessionUri } from "@/services/urls";
import client from "@/services/client";
import { sessionStorageFns } from "@/utils";

export const authUser = createAsyncThunk("auth/getSession", async () => {
  try {
    const resp = await client.get(newSessionUri);
    if (!resp) throw new Error("No response");

    sessionStorageFns.set("isAuthenticated", "true");
    sessionStorageFns.set("sessionId", resp.guest_session_id);
    sessionStorageFns.set("expiresAt", resp.expires_at);

    return resp;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
