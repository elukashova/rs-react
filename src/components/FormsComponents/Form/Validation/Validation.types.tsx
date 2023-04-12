export type ValidationHook = {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onArrivalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateRules: DateRules;
  avatarRules: FileRules;
};

export type FileRules = {
  acceptedFormats: () => boolean | string;
};

export type DateRules = {
  realDate: DateValidation;
  earlyDate: DateValidation;
};

type DateValidation = (date: string) => boolean | string;
