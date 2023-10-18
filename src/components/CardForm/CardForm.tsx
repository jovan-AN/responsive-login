import "./CardForm.css";
import { ReactElement } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Button } from "..";

interface CardFormProps {
  title: string;
  subtitle?: string;
  headerIcon?: ReactElement;
  buttonMessage?: string | null;
  onActionButton?: () => void;
  disabledButton?: boolean;
  isSubmitting?: boolean;
  children?: ReactElement;
  extraContent?: ReactElement;
}

export const CardForm = ({
  title,
  subtitle,
  buttonMessage,
  onActionButton,
  disabledButton,
  isSubmitting = false,
  children,
  extraContent,
}: CardFormProps): ReactElement => {
  const handleOnClickButton = (): void => {
    onActionButton?.();
  };

  return (
    <Card className="card-form" elevation={2}>
      <Typography className="card-title" variant="h3">
        {title}
      </Typography>
      {subtitle && (
        <Typography className="card-subtitle" variant="body2">
          {subtitle}
        </Typography>
      )}
      <Box className="card-form-content">{children}</Box>
      {buttonMessage && (
        <Button disabled={disabledButton} onClick={handleOnClickButton}>
          {isSubmitting ? <div className="spinner"></div> : buttonMessage}
        </Button>
      )}
      <Box className="card-form-extra">{extraContent}</Box>
    </Card>
  );
};
