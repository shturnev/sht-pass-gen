declare module 'passwagen' {
  interface PasswordGeneratorOptions {
    /** Включати цифри в пароль */
    numbers?: boolean;
    /** Включати великі літери в пароль */
    uppercase?: boolean;
    /** Включати малі літери в пароль */
    lowercase?: boolean;
    /** Включати спеціальні символи в пароль */
    symbols?: boolean;

    punctuation?: boolean;
    /** Довжина паролю */
    length?: number;
  }

  /** Функція генерації паролю */
  export default function generatePassword(
    options?: PasswordGeneratorOptions,
  ): string;
}
