import { updateResumeInfo } from "api/bff";
import { useAppContext, useBffResponse } from "AppContext";
import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components/macro";

export const ResumeForm: React.FC = ({ children }) => {
  const oldData = useBffResponse();
  const { lang } = useAppContext();
  const { handleSubmit } = useFormContext();
  const onSubmit = handleSubmit(
    async (
      newData: Omit<Resume, "subTitles"> & { subTitles: string[] | string }
    ) => {
      await updateResumeInfo({
        ...oldData.resumes[lang],
        ...newData,
        lang: lang,
        subTitles: Array.isArray(newData.subTitles)
          ? newData.subTitles
          : newData.subTitles.split(","),
      });
    }
  );

  return <Form onSubmit={onSubmit}>{children}</Form>;
};
const Form = styled.form``;
