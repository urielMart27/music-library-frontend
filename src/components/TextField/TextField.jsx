import "./TextField.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="text-field form mb-2">
      <label className="form form-label">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextField;
