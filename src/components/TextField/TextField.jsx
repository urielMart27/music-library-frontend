import "./TextField.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="text-field form">
      <label className="form">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextField;
