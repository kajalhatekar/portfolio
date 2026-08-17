import { FC, useState } from "react";
import emailjs from "emailjs-com";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  ContactContainer,
  TerminalButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  FormWrapper,
  InputEditWrapper,
  InputWrapperContainer,
  InputText,
  Input,
  Textarea,
  ErrorMessageWrapper,
  ButtonWrapper,
  SubmitButton,
  ModalHeading,
} from "./Contact.styles";
import { CONTACT_VALIDATION_SCHEMA } from "utils/YupValidation/TestomonialSchema";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    from_email: data.email, // or reply_to: data.email depending on your EmailJS template variable
    reply_to: data.email,
    message: data.message,
  };

  emailjs
    .send(
      "service_2lsjira",
      "template_dy6hw1x",
      emailData,
      "f9NIKz5CVBYF2nzg0"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        setIsOpen(false);
        reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message, please try again.");
      }
    );
};

  const onSubmit = (data: FormValues) => {
    sendEmail(data);
  };

  return (
    <ContactContainer id="contact">
      {/* Terminal Contact Button */}
      <TerminalButton onClick={() => setIsOpen(true)}>
        <span>contact me</span>
        <span className="prompt-row">
          &gt;<span className="terminal-cursor">_</span>
        </span>
      </TerminalButton>

      {/* Pop-up Modal */}
      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={() => setIsOpen(false)}>
              &times;
            </ModalCloseButton>

            <ModalHeading>Get in Touch</ModalHeading>

            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <InputEditWrapper>
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
                        placeholder="example@mail.com"
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
          </ModalContent>
        </ModalOverlay>
      )}
    </ContactContainer>
  );
};

export default Contact;
