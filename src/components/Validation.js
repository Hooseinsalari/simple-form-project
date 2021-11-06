export const validation = (data, type) => {
  const errors = {};

  if (type === "signin") {
    if (!data.name.trim()) {
      errors.name = "username required";
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "email addres is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password.trim()) {
      errors.password = "password required";
    } else if (data.password.trim().length < 8) {
      errors.password = "password should be bigger than 8";
    } else {
      delete errors.password;
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "confirm password required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password not match!";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccept) {
      errors.isAccept = "accepted privacy";
    } else {
      delete errors.isAccept;
    }
  } else if (type === "login") {
    if (!data.name.trim()) {
      errors.name = "username required";
    } else {
      delete errors.name;
    }

    if (!data.password.trim()) {
      errors.password = "password required";
    } else if (data.password.trim().length < 8) {
      errors.password = "password should be bigger than 8";
    } else {
      delete errors.password;
    }

    if (!data.isAccept) {
        errors.isAccept = "accepted privacy";
      } else {
        delete errors.isAccept;
      }
  }

  return errors;
};
