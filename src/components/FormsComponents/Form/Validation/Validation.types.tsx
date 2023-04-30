export type ValidationHook = {
  onArrivalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateRules: DateRules;
  avatarRules: FileRules;
};

export type FileRules = {
  acceptedFormats: (files: FileList) => boolean | string;
};

export type DateRules = {
  realDate: DateValidation;
  earlyDate: DateValidation;
};

type DateValidation = (date: string) => boolean | string;
