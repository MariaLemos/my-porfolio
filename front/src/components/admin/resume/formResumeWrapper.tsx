import { updateResumeInfo } from "api/bff";
import { useAppContext, useBffResponse } from "AppContext";
import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components/macro";
import { useAdminContext } from "../adminContext";

export const ResumeForm: React.FC = ({ children }) => {
  const oldData = useBffResponse();
  const { lang, updateResumes } = useAppContext();
  const { setMessage } = useAdminContext();
  const { handleSubmit } = useFormContext();
  const onSubmit = handleSubmit(
    async (
      newData: Omit<Resume, "subTitles"> & { subTitles: string[] | string }
    ) => {
      const result = await updateResumeInfo({
        ...oldData.resumes[lang],
        ...newData,
        lang: lang,
        subTitles: Array.isArray(newData.subTitles)
          ? newData.subTitles
          : newData.subTitles.split(","),
      });

      setMessage(result);
      if (result.type === "success") {
        updateResumes(result.data);
      }
    }
  );

  return <Form onSubmit={onSubmit}>{children}</Form>;
};
const Form = styled.form``;
