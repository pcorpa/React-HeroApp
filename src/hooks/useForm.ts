import { useState } from "react";

interface UseFormReturnObject<T, K extends keyof T> {
  formState: T;
  onInputChange: ({
    field,
    valueObject,
  }: {
    field: K;
    valueObject: T[K];
  }) => void;
  onResetForm: () => void;
}
interface UseFormReturnPrimitive<T> {
  formState: T;
  onInputChange: (value: T) => void;
  onResetForm: () => void;
}

export function useForm<T>(initialState: T): UseFormReturnPrimitive<T>;
export function useForm<T, K extends keyof T>(
  initialState: T
): UseFormReturnObject<T, K>;

export function useForm<T, K extends keyof T>(initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);

  type IsObject<T> = T extends Object ? T : never;

  const isObject = (value: T): value is IsObject<T> =>
    typeof value === "object" && value !== null;

  if (isObject(initialState)) {
    const onInputChange = ({
      field,
      valueObject,
    }: {
      field: K;
      valueObject: T[K];
    }) => {
      setFormState({
        ...formState,
        [field]: valueObject,
      });
    };

    const onResetForm = () => {
      setFormState(initialState);
    };

    return {
      formState,
      onInputChange,
      onResetForm,
    };
  } else {
    const onInputChange = (valueNotObject: T) => {
      setFormState(valueNotObject);
    };

    const onResetForm = () => setFormState(initialState);

    return {
      formState,
      onInputChange,
      onResetForm,
    };
  }
}
