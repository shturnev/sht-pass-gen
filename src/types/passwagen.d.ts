declare module 'passwagen' {
  interface PasswordGeneratorOptions {
    numbers?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    symbols?: boolean;
    punctuation?: boolean;
    length?: number;
  }

  export default function generatePassword(
    options?: PasswordGeneratorOptions,
  ): string;
}
