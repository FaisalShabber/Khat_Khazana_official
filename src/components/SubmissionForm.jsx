import React, { useState } from "react";

// Helper components for form elements
const InputField = ({
  label,
  type = "text",
  name,
  required = false,
  wrapperClassName = "",
  className = "",
}) => (
  <div className={`flex flex-col ${wrapperClassName}`}>
    <label htmlFor={name} className="font-bold text-sm mb-2 text-[#4A2C2A]">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className={`border border-[#8B4513]/50 text-[#4A2C2A] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5 ${className}`}
    />
  </div>
);

const TextareaField = ({
  label,
  name,
  required = false,
  className = "",
  rows = 4,
}) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={name} className="font-bold text-sm mb-2 text-[#4A2C2A]">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className=" border border-[#8B4513]/50 text-[#4A2C2A] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block resize-none p-2.5 h-10"
    />
  </div>
);

const RadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  className = "",
}) => (
  <div className={`flex flex-col ${className}`}>
    <label className="font-bold text-sm mb-2 text-[#4A2C2A]">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <div className="flex items-center space-x-6 pt-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="w-4 h-4 text-[#4A2C2A] bg-gray-100 border-gray-300 focus:ring-[#4A2C2A]"
          />
          <span className="ml-2 text-sm text-[#5C4033]">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const FileInput = ({ label, subtext, name, required = false }) => (
  <div className="flex flex-col">
    {label && (
      <label className="font-bold text-sm mb-2 block text-[#4A2C2A]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    )}
    <button
      type="button"
      className="bg-[#8B5E3C] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#A17A5D] transition-colors w-max"
    >
      Choose File
    </button>
    {subtext && <p className="text-xs text-red-500 mt-2">{subtext}</p>}
  </div>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
  <div className="flex items-center">
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 bg-transparent text-[#4A2C2A]  border-[#8B4513]/50 rounded focus:ring-[#4A2C2A]"
    />
    <label htmlFor={name} className="ml-3 text-sm text-[#5C4033]">
      {label}
    </label>
  </div>
);
const NewsletterSection = () => {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-5xl font-['philosopher',_cursive]  text-black">
        Want more historic letters?
      </h2>
      <p className="mt-2 mb-8 text-xl font-['Ephesis',cursive]  text-black max-w-2xl mx-auto">
        Join our archive mailing list and never miss an update.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address.."
          className="bg-[#F5EFE1]/60 rounded-lg border-[#85654c] placeholder:text-[#4A3F35] placeholder:opacity-80 w-full sm:w-80 h-12 px-6  focus:outline-none focus:ring-2 focus:ring-[#A17A5D]"
          style={{
            backgroundImage: `url('/images/bg button.webp')`,
            backgroundSize: "102% 107%",
          }}
        />
        <button
          type="submit"
          className="rounded transition-all duration-200 ease-in-out hover:-translate-y-px  px-8 py-3 "
          style={{
            backgroundImage: `url('/images/bg button.webp')`,
            backgroundSize: "100% 103%",
          }}
        >
          Shop Now
        </button>
      </form>
    </section>
  );
};

const StaticAudioPlayer = () => (
  <div className="bg-white rounded-full p-2 flex items-center shadow-md w-full max-w-xs">
    <button
      className="bg-[#4A2C2A] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 focus:outline-none flex-shrink-0"
      aria-label="Play Audio"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5.5 16.5A1.5 1.5 0 0 1 4 15V5a1.5 1.5 0 0 1 2.25-1.3l8 5a1.5 1.5 0 0 1 0 2.6l-8 5A1.5 1.5 0 0 1 5.5 16.5z"></path>
      </svg>
    </button>
    <div
      className="flex-grow flex items-center h-full gap-px px-2"
      aria-hidden="true"
    >
      {[
        4, 8, 6, 10, 7, 12, 8, 10, 6, 8, 5, 4, 3, 5, 6, 8, 10, 7, 5, 4, 8, 6,
        10, 7, 12, 8, 10, 7, 5, 3, 4, 6,
      ].map((h, i) => (
        <div
          key={i}
          className="bg-gray-400 w-0.5"
          style={{ height: `${h}px` }}
        ></div>
      ))}
    </div>
    <span className="text-sm text-[#4A2C2A] font-mono ml-3">1.00</span>
  </div>
);

const FormSection = ({ title, children, className = "" }) => (
  <div className={`mb-8 ${className}`}>
    <h2 className="text-2xl font-bold text-[#4A2C2A] mb-6 font-['Philosopher',_serif]">
      {title}
    </h2>
    {children}
  </div>
);

const SubmissionForm = () => {
  const [uploadType, setUploadType] = useState("Both");
  const [letterTranscriptType, setLetterTranscriptType] =
    useState("Text format");
  const [letterOwner, setLetterOwner] = useState("No");
  const [letterAttachment, setLetterAttachment] = useState("Photograph");
  const [photoOwner, setPhotoOwner] = useState("No");
  const [photoAttachment, setPhotoAttachment] = useState("Photograph");
  const [uploaded, setUploaded] = useState("No");
  const [before2000, setBefore2000] = useState("No");
  const [activeTab, setActiveTab] = useState("terms"); // 'terms' or 'guidelines'
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
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen  text-black">
      {/* Animated Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
        ⚙️ Under Process...
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-2xl text-center mb-8">
        Work in progress — about 70% to 80% complete
      </p>

      {/* Progress Bar */}
      <div className="w-64 bg-white/30 rounded-full h-5 overflow-hidden">
        <div className="bg-green-400 h-5 animate-[progress_3s_ease-in-out_infinite]" 
             style={{ width: "75%" }}></div>
      </div>

      {/* Loader */}
      <div className="mt-10 w-14 h-14 border-4 border-[#6E4A27] border-t-transparent rounded-full animate-spin"></div>
    </div>
      <div
        className="min-h-screen hidden w-full bg-cover  bg-fixed font-['Philosopher',_serif,'Ephesis'] max-w-[640px]:bg-inherit  text-[#4A2C2A] bg-section"
        style={{
          backgroundImage: "url('/images/bg.webp')",
          backgroundPosition: "100% 10%",
        }}
      >
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center">
            <h1 className="text-6xl md:text-7xl font-['Philosopher',_serif] font-bold text-black">
              How To Submit Your Letter
            </h1>
            <div className="mt-6 flex justify-center space-x-8">
              <button
                onClick={() => setActiveTab("terms")}
                className={`text-black text-lg font-semibold      p-3 px-4  bg-cover rounded-full `}
                style={{
                  backgroundImage: "url('/images/bg button.webp')",
                  backgroundPosition: "100% 100%",
                }}
              >
                Terms of Submission
              </button>
              <button
                onClick={() => setActiveTab("guidelines")}
                className={`text-black text-lg font-semibold bg-cover rounded-full transition-colors p-3 px-4 `}
                style={{
                  backgroundImage: "url('/images/bg button.webp')",
                  backgroundPosition: "100% 100%",
                }}
              >
                Submission Guidelines
              </button>
            </div>
          </header>

          <section
            className="my-12 max-w-5xl mx-auto p-8 bg-no-repeat bg-cover "
            style={{ backgroundImage: "url('/images/bg button.webp')" }}
          >
            {activeTab === "terms" && (
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#4A2C2A] mb-4 font-['Philosopher',_serif]">
                  Terms Of Submission
                </h2>
                <p className="text-[#5C4033] leading-relaxed text-md">
                  Khat Khazana Heritage does not claim ownership of any images
                  or materials submitted by contributors. We do not offer
                  third-party licensing of any content published on this
                  platform. Additionally, we never charge any fees to publish
                  submissions. All materials are shared strictly for
                  educational, archival, and storytelling purposes, with respect
                  to the families and individuals who have shared them.
                </p>
              </div>
            )}
            {activeTab === "guidelines" && (
              <div className="max-w-3xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-[#4A2C2A] mb-4 font-['Philosopher',_serif] text-center">
                  Submission Guidelines
                </h2>
                <ul className="text-[#5C4033] leading-relaxed text-md list-disc pl-5 space-y-2">
                  <li>
                    Submit scanned photographs – JPEG format, 10” width, 300DPI
                    resolution.
                  </li>
                  <li>
                    A company with a short narrative or caption that may
                    include:
                  </li>
                  <li className="list-none">
                    <ul className="list-[circle] pl-5 space-y-1">
                      <li>Who is in the photo?</li>
                      <li>Where is the family originally from?</li>
                      <li>What were their roles or professions?</li>
                      <li>What was the context or reason behind the photo?</li>
                    </ul>
                  </li>
                  <li>A short written story or background note is required.</li>
                  <li>
                    Include as many details as possible: names, year, location,
                    ethnicity, and occupations.
                  </li>
                </ul>
              </div>
            )}
          </section>

          <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl shadow-2xl border  border-[#8B4513]/30">
            <form onSubmit={handleSubmit}>
              <FormSection title="Personal Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 ">
                  <InputField label="Full Name" name="fullName" required />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
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
                    <InputField
                      label="Language"
                      name="letterLanguage"
                      required
                    />
                    <InputField
                      label="Place Taken"
                      name="letterPlace"
                      required
                    />
                    <InputField
                      label="Category"
                      name="letterCategory"
                      required
                    />
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
                    <InputField
                      label="Language"
                      name="photoLanguage"
                      required
                    />
                    <InputField
                      label="Place Taken"
                      name="photoPlace"
                      required
                    />
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
                        Upload Audio (MP3){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <FileInput
                          label=""
                          name="audioFile"
                          subtext="Only MP3 Fomate (Max 5MB)"
                        />
                        <StaticAudioPlayer />
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
                      onChange={(e) =>
                        setAcceptedTerms(e.target.value === "true")
                      } // convert back to boolean
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
                  className="w-full bg-[#4A2C2A] text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-[#D4A017] transition-colors duration-300 shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </main>
        <NewsletterSection />
      </div>
    </div>
  );
};

export default SubmissionForm;
