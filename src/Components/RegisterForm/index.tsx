import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

type RegistrationFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: "Male" | "Female " | "Other";
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>();

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (e) => {
    console.log(e);
  };
  const onError = (err: any) => console.log(err);

  return (
    <div className="my-4">
      <h2 className="text-center fw-bold">Register Form</h2>
      <Form onSubmit={handleSubmit(onSubmit, onError)} className="my-4">
        <Row>
          <Form.Group as={Col}>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "This Field is Required" })}
            />
            {errors?.firstName && (
              <Form.Text className="text-danger d-block">
                {errors.firstName?.message}
              </Form.Text>
            )}
            <Form.Text className="text-muted">Eg: Jhon</Form.Text>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              {...register("lastName", { required: "This Field is Required" })}
              placeholder="Last Name"
            />
            {errors?.lastName && (
              <Form.Text className="text-danger d-block">
                {errors.lastName?.message}
              </Form.Text>
            )}

            <Form.Text className="text-muted">Eg: Doe</Form.Text>
          </Form.Group>
        </Row>
        <Form.Group className="mt-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "This Field is Required",
            })}
            placeholder="You're Email Address"
          />
          {errors?.email && (
            <Form.Text className="text-danger d-block">
              {errors.email?.message}
            </Form.Text>
          )}

          <Form.Text className="text-muted">Eg: JhonDoe@mail.com</Form.Text>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: "This Field is Required" })}
            placeholder="You're Password"
          />
          {errors?.password && (
            <Form.Text className="text-danger d-block">
              {errors.password?.message}
            </Form.Text>
          )}

          <Form.Text className="text-muted">Keep it to yourself.</Form.Text>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            {...register("dateOfBirth", { required: "This Field is Required" })}
            placeholder="You're Date of Birth."
          />
          {errors?.dateOfBirth && (
            <Form.Text className="text-danger d-block">
              {errors.dateOfBirth?.message}
            </Form.Text>
          )}

          <Form.Text className="text-muted">Eg: 02/20/2000</Form.Text>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Gender:</Form.Label>
          <Form.Select
            {...register("gender", { required: "This Field is Required" })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
          {errors?.gender && (
            <Form.Text className="text-danger d-block">
              {errors.gender?.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Check
            type="checkbox"
            label="I accept the all terms and conditions."
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
