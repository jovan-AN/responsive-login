"use client";

import "./Login.css";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/store/appHooks";
import { authUser } from "@/store/thunks/authThunk";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { CardForm } from "../../components";
import { appRoutes } from "@/paths.routes";
import {
  EmailSchemaType,
  PasswordSchemaType,
  emailSchema,
  passwordSchema,
} from "./login.schema";
import Image from "next/image";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

export const Login = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isLoading, isAuthenticated, errorMessage } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const [email, setEmail] = useState<EmailSchemaType>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<PasswordSchemaType>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const validateEmail = emailSchema.safeParse(email);
  const validatePassword = passwordSchema.safeParse(password);

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const checkIsFormCompleted = useCallback(() => {
    if (email) {
      !validateEmail.success
        ? setEmailError(validateEmail.error.issues[0].message)
        : setEmailError("");
    }
    if (email && password) {
      !validatePassword.success
        ? setPasswordError(validatePassword.error.issues[0].message)
        : setPasswordError("");
    }
    if (validateEmail.success && validatePassword.success) {
      setIsFormCompleted(true);
    } else {
      setIsFormCompleted(false);
    }
  }, [email, password, validateEmail, validatePassword]);

  const handleSubmit = () => {
    dispatch(authUser());
  };

  const redirectToDashboard = useCallback(() => {
    if (isAuthenticated) {
      router.push(appRoutes.dashboard);
      return;
    }
  }, [isAuthenticated, router]);

  const handleAuthError = useCallback(() => {
    if (!isLoading && errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage, isLoading]);

  useEffect(() => {
    checkIsFormCompleted();
    redirectToDashboard();
    handleAuthError();
  }, [checkIsFormCompleted, handleAuthError, redirectToDashboard]);

  const eyeIcon = (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
      </IconButton>
    </InputAdornment>
  );

  const storesImages = (
    <div className="stores-images">
      <Image
        src={googlePlay}
        alt="Get it on Google Play"
        width={126}
        height={38}
      />
      <Image
        src={appStore}
        alt="Download on the App Store"
        width={126}
        height={38}
      />
    </div>
  );

  return (
    <>
      <CardForm
        title="Sign In"
        subtitle="From insurance to play dates and everything in between, the Pet Cloud makes pet parenting a breeze."
        buttonMessage="SIGN IN"
        disabledButton={!isFormCompleted}
        isSubmitting={isLoading}
        onActionButton={handleSubmit}
        extraContent={storesImages}
      >
        <>
          <TextField
            label="Email"
            variant="standard"
            onChange={handleOnChangeEmail}
            error={!!emailError}
            helperText={emailError}
            fullWidth
          />
          {validateEmail.success && (
            <TextField
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              onChange={handleOnChangePassword}
              error={!!passwordError}
              helperText={passwordError}
              fullWidth
              InputProps={{
                endAdornment: eyeIcon,
              }}
            />
          )}
        </>
      </CardForm>
      <Toaster position="bottom-center" />
    </>
  );
};
