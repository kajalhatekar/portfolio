import { FC } from "react";
import emailjs from "emailjs-com";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  FormWrapper,
  Input,
  InputEditWrapper,
  InputWrapperContainer,
  InputText,
  Textarea,
  ErrorMessageWrapper,
  ButtonWrapper,
  Wrapper,
  SubmitButton,
} from "style/Testomonial";
import { Container } from "style/Education";
import { Heading } from "style/Skill";
import { CONTACT_VALIDATION_SCHEMA } from "utils/YupValidation/TestomonialSchema";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(CONTACT_VALIDATION_SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = (data: FormValues) => {
    const emailData: Record<string, unknown> = {
      to_name: "Kajal",
      from_name: data.name,
      message: data.message,
    };

    emailjs
      .send(
        "service_2lsjira",
        "template_dy6hw1x",
        emailData,
        "f9NIKz5CVBYF2nzg0",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        () => {
          toast.error("Failed to send message, please try again.");
        },
      );
  };

  const onSubmit = (data: FormValues) => {
    sendEmail(data);
    reset();
  };

  return (
    <Container id="contact">
      <Heading>Contact</Heading>
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <InputEditWrapper
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <InputWrapperContainer>
              <InputText>What's your name?</InputText>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" placeholder="Kajal Raj" />
                )}
              />
              <ErrorMessageWrapper>
                {errors.name && <span>{errors.name.message}</span>}
              </ErrorMessageWrapper>
            </InputWrapperContainer>

            <InputWrapperContainer>
              <InputText>Your email</InputText>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="E-mail"
                  />
                )}
              />
              <ErrorMessageWrapper>
                {errors.email && <span>{errors.email.message}</span>}
              </ErrorMessageWrapper>
            </InputWrapperContainer>
            <InputWrapperContainer className="textarea-height">
              <InputText>Speak your mind</InputText>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Type your message here..."
                    maxLength={600}
                  />
                )}
              />
              <ErrorMessageWrapper>
                {errors.message && <span>{errors.message.message}</span>}
              </ErrorMessageWrapper>
            </InputWrapperContainer>
          </InputEditWrapper>

          <ButtonWrapper>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ButtonWrapper>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Contact;
