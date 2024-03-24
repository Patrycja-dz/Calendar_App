import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateEvent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [invitee, setInvitee] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleInviteeChange = (e) => {
    setInvitee(e.target.value);
  };

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      date: date,
      description: description,
      invitee: invitee,
    };
    console.log("Form Data:", formData);
  };

  return (
    <section>
      <button className="btn btn-primary w-min m-2" onClick={handleGoBack}>
        Powrót
      </button>
      <div className="flex flex-col h-screen">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Nazwa</span>
              </label>
              <textarea
                value={name}
                onChange={handleNameChange}
                placeholder="Nazwa"
                className="textarea textarea-primary  textarea-lg w-full"
                maxLength={125}
                minLength={1}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Data</span>
              </label>
              <input
                value={date}
                onChange={handleDateChange}
                type="date"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Opis</span>
              </label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Opis"
                className="textarea textarea-primary  textarea-lg w-full"
                maxLength={500}
                minLength={1}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Zaproś</span>
              </label>
              <select
                defaultValue={invitee}
                onChange={handleInviteeChange}
                className="select select-primary w-full max-w-xs"
              >
                <option disabled selected>
                  Zaproś znajomych na wydarzenie
                </option>
                <option>Kaja Lis</option>
                <option>Nina Wójcik</option>
                <option>Radosław Bąk</option>
                <option>Jacek Dąbrowski</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-block btn-primary">
                Wywietl kalendarze
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-block btn-primary">
                Stwórz
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
