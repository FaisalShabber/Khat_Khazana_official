// @ts-nocheck
import React, { useState } from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";
import FileInput from "./FileInput";
import StaticAudioPlayer from "./StaticAudioPlayer";

const Form = () => {
  const [uploadType, setUploadType] = useState("Both");
  const [letterTranscriptType, setLetterTranscriptType] =
    useState("Text format");
  const [letterOwner, setLetterOwner] = useState("No");
  const [letterAttachment, setLetterAttachment] = useState("Photograph");
  const [photoOwner, setPhotoOwner] = useState("No");
  const [photoAttachment, setPhotoAttachment] = useState("Photograph");
  const [uploaded, setUploaded] = useState("No");
  const [before2000, setBefore2000] = useState("No");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

  const handleUploadTypeChange = (e) => setUploadType(e.target.value);
  const handleTranscriptTypeChange = (e) =>
    setLetterTranscriptType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setFormError("Please accept the terms and conditions");
    } else {
      setFormError("");
      // Handle successful submission
      alert("Form submitted successfully!");
    }
  };

  const renderLetterInfo = uploadType === "Letter" || uploadType === "Both";
  const renderPhotoInfo = uploadType === "Photographs" || uploadType === "Both";

  return (
    <section className="max-w-5xl text-left mx-auto p-8 sm:p-12 rounded-2xl shadow-2xl border  border-[#8B4513]/30">
      <form onSubmit={handleSubmit}>
        <FormSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 ">
            <InputField label="Full Name" name="fullName" required />
            <InputField label="Email" name="email" type="email" required />
            <InputField label="Phone" name="phone" />
            <InputField label="Current Location" name="location" />
            <br />
            <div className="md:col-span-2">
              <RadioGroup
                label="Are you uploading letters or photographs?"
                name="uploadType"
                required
                value={uploadType}
                onChange={handleUploadTypeChange}
                options={[
                  { value: "Letter", label: "Letter" },
                  { value: "Photographs", label: "Photographs" },
                  { value: "Both", label: "Both" },
                ]}
              />
            </div>
          </div>
        </FormSection>

        {renderLetterInfo && (
          <FormSection title="Letter Information">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <InputField label="Title" name="letterTitle" required />
              <InputField label="Year" name="letterYear" required />
              <InputField label="Language" name="letterLanguage" required />
              <InputField label="Place Taken" name="letterPlace" required />
              <InputField label="Category" name="letterCategory" required />
              <InputField
                label="Photograph Caption"
                name="letterCaption"
                required
              />
              <RadioGroup
                label="Are you the guardian/owner?"
                name="letterOwner"
                required
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                value={letterOwner}
                onChange={(e) => setLetterOwner(e.target.value)}
              />
              <RadioGroup
                label="Attachment Type"
                name="letterAttachment"
                required
                options={[
                  { value: "Photograph", label: "Photograph" },
                  { value: "Letter", label: "Letter" },
                  { value: "Other", label: "Other" },
                ]}
                value={letterAttachment}
                onChange={(e) => setLetterAttachment(e.target.value)}
              />
              <div className="">
                <FileInput
                  label="Upload Image (JPEG)"
                  name="letterImage"
                  subtext="Hi Res Jpegs only. 10” width scanned in 300 DPI (Max 5MB)"
                  required
                />
              </div>
            </div>
          </FormSection>
        )}

        {renderPhotoInfo && (
          <FormSection title="Photographs Information">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <InputField label="Title" name="photoTitle" required />
              <InputField label="Year" name="photoYear" required />
              <InputField label="Language" name="photoLanguage" required />
              <InputField label="Place Taken" name="photoPlace" required />
              <InputField
                label="Category"
                name="photoCategory"
                required
                className="md:col-span-2"
              />
              <InputField
                label="Photograph Caption"
                name="photoCaption"
                required
                className="md:col-span-2"
              />
              <RadioGroup
                label="Are you the guardian/owner?"
                name="photoOwner"
                required
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                value={photoOwner}
                onChange={(e) => setPhotoOwner(e.target.value)}
              />
              <RadioGroup
                label="Attachment Type"
                name="photoAttachment"
                required
                options={[
                  { value: "Photograph", label: "Photograph" },
                  { value: "Letter", label: "Letter" },
                  { value: "Other", label: "Other" },
                ]}
                value={photoAttachment}
                onChange={(e) => setPhotoAttachment(e.target.value)}
              />
              <div className="">
                <FileInput
                  label="Upload Image (JPEG)"
                  name="photoImage"
                  subtext="Hi Res Jpegs only. 10” width scanned in 300 DPI (Max 5MB)"
                  required
                />
              </div>
            </div>
          </FormSection>
        )}

        <FormSection title="About The Image">
          <div className="space-y-8 ">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8  items-start">
                <div className="md:col-span-2">
                  <FileInput
                    label="Upload Image (JPEG)"
                    name="aboutImage"
                    subtext="Hi Res Jpegs only. 10” width scanned in 300 DPI (Max 5MB)"
                    required
                  />
                </div>
                <div className="w-32 h-32 bg-[#E0D4B6] rounded-md flex items-center justify-center p-2">
                  <img
                    src="https://i.ibb.co/3k5fJgB/1.png"
                    alt="Upload preview"
                    className="w-16 h-16 opacity-100"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold text-sm mb-2 block">
                  Upload Audio (MP3) <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <FileInput
                    label=""
                    name="audioFile"
                    subtext="Only MP3 Fomate (Max 5MB)"
                  />
                  <StaticAudioPlayer src="/audio/sample.mp3" duration="1:00" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3">
              {/* Default input height */}
              <InputField
                wrapperClassName="w-1/2"
                className="h-24"
                label="Letter Transcript"
                name="Letter-Transcript"
                required
              />

              {/* Taller input (still input, not textarea) */}
              <InputField
                wrapperClassName="w-1/2 "
                className="h-24"
                label="Narrative (Optional)"
                name="narrative"
              />
            </div>
          </div>
        </FormSection>

        <FormSection title="Verification">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <RadioGroup
              label="Have you uploaded an image / Letter?"
              name="uploaded"
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              value={uploaded}
              onChange={(e) => setUploaded(e.target.value)}
            />
            <RadioGroup
              label="Is the image from before 2000?"
              name="before2000"
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              value={before2000}
              onChange={(e) => setBefore2000(e.target.value)}
            />
            <div className=" ">
              <RadioGroup
                label="Please Accept the Terms & Conditions"
                name="terms"
                options={[
                  { value: "true", label: "Yes" },
                  { value: "false", label: "No" },
                ]}
                value={acceptedTerms ? "true" : "false"} // bind as string
                onChange={(e) => setAcceptedTerms(e.target.value === "true")} // convert back to boolean
              />
            </div>
          </div>
        </FormSection>

        {formError && (
          <div className="relative before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 my-6 text-start bg-transparent  border border-red-400 text-red-700 px-2 py-2 rounded-lg">
            <p>{formError}</p>
          </div>
        )}

        <div className="mt-10">
          <button
            type="submit"
            className="w-full bg-[#6E4A27] text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-[#79542f] transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
