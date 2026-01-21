import { useFormStore } from "../store/useFormStore";

function FormPage() {
  const { formData } = useFormStore();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Page</h1>
      <p>Name: {formData.name}</p>
    </div>
  );
}

export default FormPage;





