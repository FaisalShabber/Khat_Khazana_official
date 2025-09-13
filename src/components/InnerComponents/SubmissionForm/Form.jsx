// @ts-nocheck
import React, { useState } from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";
import FileInput from "./FileInput";
import DropdownField from "./DropdownField";

const Form = () => {
  const [uploadType, setUploadType] = useState("Both");
  const [before2000, setBefore2000] = useState("No");
  const [letterNarrativeFormat, setLetterNarrativeFormat] = useState("text");
  const [photoNarrativeFormat, setPhotoNarrativeFormat] = useState("text");
  const [hasReadGuidelines, setHasReadGuidelines] = useState(true);
  const [agreedTermsSubmission, setAgreedTermsSubmission] = useState(true);
  const [letterLanguage, setLetterLanguage] = useState("");
  const [letterCategory, setLetterCategory] = useState("");
  const [decade, setDecade] = useState("");

  const handleUploadTypeChange = (e) => setUploadType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    e.target.reset();
    // reset states
    setUploadType("Both");
    setBefore2000("No");
    setLetterNarrativeFormat("text");
    setPhotoNarrativeFormat("text");
    setLetterLanguage("");
    setLetterCategory("");
    setDecade("");
  };

  const renderLetterInfo = uploadType === "Letter" || uploadType === "Both";
  const renderPhotoInfo = uploadType === "Photographs" || uploadType === "Both";

  const decadeOptions = Array.from({ length: 10 }, (_, i) => {
    const start = 1900 + i * 10;
    const end = start + 10;
    return { value: `${start}-${end}`, label: `${start} - ${end}` };
  });

  return (
    <section className="max-w-5xl text-left mx-auto p-8 sm:p-12 rounded-2xl shadow-2xl border border-[#8B4513]/30">
      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFO */}
        <FormSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 items-center">
            <InputField label="Full Name" name="fullName" required />
            <InputField label="Email" name="email" type="email" required />
            <InputField label="Phone" name="phone" />
            <InputField label="Current Location" name="location" />
            <RadioGroup
              label="I have read the submission guidelines?"
              name="guidelines"
              required
              value={hasReadGuidelines ? "Yes" : "No"}
              onChange={(e) => setHasReadGuidelines(e.target.value === "Yes")}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
            <RadioGroup
              label="I agree with term of submission?"
              name="termsSubmission"
              required
              value={agreedTermsSubmission ? "Yes" : "No"}
              onChange={(e) =>
                setAgreedTermsSubmission(e.target.value === "Yes")
              }
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          </div>
        </FormSection>

        {hasReadGuidelines && agreedTermsSubmission && (
          <>
            {/* UPLOAD TYPE */}
            <div className="md:col-span-2 mb-8">
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

            {/* LETTER INFO */}
            {renderLetterInfo && (
              <>
                <FormSection title="Letter Information">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    <DropdownField
                      label="Category"
                      name="letterCategory"
                      required
                      value={letterCategory}
                      onChange={(e) => setLetterCategory(e.target.value)}
                      options={[
                        { value: "Love Letter", label: "Love Letter" },
                        { value: "War", label: "War" },
                        { value: "Political", label: "Political" },
                      ]}
                    />
                    <DropdownField
                      label="Language"
                      name="letterLanguage"
                      required
                      value={letterLanguage}
                      onChange={(e) => setLetterLanguage(e.target.value)}
                      options={[
                        { value: "English", label: "English" },
                        { value: "Urdu", label: "Urdu" },
                        { value: "Punjabi", label: "Punjabi" },
                      ]}
                    />
                    <DropdownField
                      label="Decade"
                      name="decade"
                      required
                      value={decade}
                      onChange={(e) => setDecade(e.target.value)}
                      options={decadeOptions}
                    />
                    <FileInput
                      label="Upload Letter Image (JPEG)"
                      name="letterImage"
                      subtext="Hi Res Jpegs only. 10” width scanned in 300 DPI (Max 5MB)"
                      required
                      previewType="image"
                    />
                  </div>
                </FormSection>

                <FormSection>
                  <div className="flex flex-col md:flex-row justify-between gap-3">
                    <div className="flex flex-col md:w-1/2 w-full">
                      <div className="flex justify-between">
                        <label className="font-bold text-sm block">
                          Letter Transcript <span className="text-red-600">*</span>
                        </label>
                        <span className="flex gap-4 text-sm">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="letterNarrativeFormat"
                              value="text"
                              checked={letterNarrativeFormat === "text"}
                              onChange={() => setLetterNarrativeFormat("text")}
                            />
                            Text
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="letterNarrativeFormat"
                              value="audio"
                              checked={letterNarrativeFormat === "audio"}
                              onChange={() => setLetterNarrativeFormat("audio")}
                            />
                            Audio
                          </label>
                        </span>
                      </div>

                      {letterNarrativeFormat === "text" ? (
                        <InputField
                          wrapperClassName="w-full "
                          className="h-24"
                          name="letterNarrative"
                        />
                      ) : (
                        <FileInput
                          name="letterAudioFile"
                          subtext="Only MP3 Format (Max 5MB)"
                          previewType="audio"
                          className="mt-5"
                        />
                      )}
                    </div>
                    <InputField
                      wrapperClassName="w-full md:w-1/2 "
                      className="h-24"
                      label="Narrative (Optional)"
                      name="letterNarrativeOptional"
                    />
                  </div>
                </FormSection>
              </>
            )}

            {/* PHOTO INFO */}
            {renderPhotoInfo && (
              <>
                <FormSection title="Photographs Information">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    <InputField
                      label="Photograph Caption"
                      name="photoCaption"
                      required
                      className="md:col-span-2"
                    />
                    <InputField
                      label="Place Taken (Optional)"
                      name="photoPlace"
                    />
                    <FileInput
                      label="Upload Photo (JPEG)"
                      name="photoImage"
                      subtext="Hi Res Jpegs only. 10” width scanned in 300 DPI (Max 5MB)"
                      required
                    />
                  </div>
                </FormSection>

                <FormSection>
                  <div className="flex flex-col md:flex-row justify-between gap-3">
                    <div className="flex flex-col md:w-1/2 w-full">
                      <div className="flex justify-between">
                        <label className="font-bold text-sm block">
                          Photo Transcript <span className="text-red-600">*</span>
                        </label>
                        <span className="flex gap-4 text-sm">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="photoNarrativeFormat"
                              value="text"
                              checked={photoNarrativeFormat === "text"}
                              onChange={() => setPhotoNarrativeFormat("text")}
                            />
                            Text
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="photoNarrativeFormat"
                              value="audio"
                              checked={photoNarrativeFormat === "audio"}
                              onChange={() => setPhotoNarrativeFormat("audio")}
                            />
                            Audio
                          </label>
                        </span>
                      </div>

                      {photoNarrativeFormat === "text" ? (
                        <InputField
                          wrapperClassName="w-full "
                          className="h-24"
                          name="photoNarrative"
                        />
                      ) : (
                        <FileInput
                          name="photoAudioFile"
                          subtext="Only MP3 Format (Max 5MB)"
                          previewType="audio"
                          className="mt-5"
                        />
                      )}
                    </div>
                    <InputField
                      wrapperClassName="w-full md:w-1/2 "
                      className="h-24"
                      label="Narrative (Optional)"
                      name="photoNarrativeOptional"
                    />
                  </div>
                </FormSection>
              </>
            )}

            {/* VERIFICATION */}
            <FormSection title="Verification">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
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
              </div>
            </FormSection>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-[#6E4A27] text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-[#79542f] transition-colors duration-300 shadow-lg cursor-pointer"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default Form;
