import React from 'react';
import { Control } from 'react-hook-form';
import { ContactFormValues } from '@/lib/schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormFieldWithErrorProps = {
  control: Control<ContactFormValues>;
  name: 'name' | 'email' | 'message';
  label: string;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
  maxLength?: number;
  onChangeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  translateError: (error: { message?: string }) => string;
};

export const FormFieldWithError = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  isTextarea = false,
  maxLength,
  onChangeHandler,
  translateError,
}: FormFieldWithErrorProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                className="min-h-32"
                placeholder={placeholder}
                {...field}
                onChange={onChangeHandler || field.onChange}
              />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </FormControl>

          {maxLength && (
            <div className="flex justify-end text-xs text-muted-foreground mt-1">
              <span>
                {field.value?.length || 0}/{maxLength}
              </span>
            </div>
          )}

          {fieldState.error && (
            <p className="text-[0.8rem] font-medium text-destructive mt-2">
              {translateError(fieldState.error)}
            </p>
          )}
        </FormItem>
      )}
    />
  );
};

export default FormFieldWithError;
