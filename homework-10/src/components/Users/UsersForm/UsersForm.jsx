import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function getEmptyUser() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}

function UsersForm(props) {
  const [user, setUser] = useState(getEmptyUser());
  const [formError, setFormError] = useState();

  useEffect(() => {
    if (props.userId) {
      setUser({ ...props.user });
    }
  }, [props]);

  const onCreateUser = (user) => {
    props.userId ? props.updateUser(user) : props.addUser(user);
  };

  const onSave = (user) => {
    onCreateUser(user);
  };

  const onUsersFormSubmit = (e) => {
    e.preventDefault();
    for (const key in user) {
      if (user[key] === "") {
        setFormError(true);
        return;
      }
    }

    const newUser = {
      ...user,
    };
    onSave(newUser);
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(.MuiButton-root)": { m: 1, width: "25ch" },
          display: "flex",
          backgroundColor: "rgb(231, 235, 240)",
          padding: "24px",
          borderRadius: "10px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={onUsersFormSubmit}
      >
        <TextField
          id="nameInput"
          label="Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={onChange}
          error={formError && user.name.length === 0}
          helperText={formError ? "Field is empty" : null}
          required
          sx={{ backgroundColor: "#fff" }}
        />
        <TextField
          id="surnameInput"
          label="Surname"
          variant="outlined"
          name="surname"
          value={user.surname}
          onChange={onChange}
          error={formError && user.surname.length === 0}
          helperText={formError ? "Field is empty" : null}
          required
          sx={{ backgroundColor: "#fff" }}
        />
        <TextField
          id="phoneInput"
          label="Phone"
          variant="outlined"
          name="phone"
          value={user.phone}
          onChange={onChange}
          error={formError && user.phone.length === 0}
          helperText={formError ? "Field is empty" : null}
          required
          sx={{ backgroundColor: "#fff" }}
        />
        <Button
          sx={{ width: "140px", m: 1 }}
          variant="contained"
          size="large"
          color="success"
          type="submit"
        >
          Save
        </Button>
        <Button
          sx={{ width: "140px", m: 1 }}
          variant="contained"
          size="large"
          color="error"
          component={RouterLink}
          to={"/"}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}

export default UsersForm;
