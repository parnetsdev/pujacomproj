2. Add Emmet for Custom File Types
If Emmet is not working for a specific file type (e.g., .js, .jsx, or .tsx), you need to configure it:

Open the Command Palette (Ctrl + Shift + P or Cmd + Shift + P on macOS).
Type Preferences: Open Settings (JSON) and select it.
Add the following configuration for your file types:
json
Copy code
"emmet.includeLanguages": {
    "javascript": "html",
    "javascriptreact": "html",
    "typescriptreact": "html"
}
This enables Emmet support for JavaScript, React, and TypeScript files.


 <section
          style={{
            background: "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)",
            padding: "50px 0",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 15px", padding: "0 15px" }}
          >
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
              Connect with Astroguru
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
              Uncover the mysteries of the stars and let your destiny be guided
              by ancient wisdom. Our expert Astrogurus are here to help you with
              personal insights and cosmic advice.
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#fdbb2d",
              color: "#1a2a6c",
              fontSize: "18px",
              padding: "12px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              position: "absolute",
              right: "30px", // Right side distance
              top: "80%", // Vertically centered
              transform: "translateY(-50%)", // Vertically centered adjustment
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: "10", // Ensure it's above other content
            }}
            onClick={() => alert("Talking to Astroguru!")}
          >
            Talk to Astroguru
          </button>
        </section>
  { id: 6, name: "Maria Garcia", location: "Barcelona, Spain", message: "Wishing everyone joy." },
    { id: 7, name: "Chen Wei", location: "Beijing, China", message: "Spreading kindness and love." },
    { id: 8, name: "Sarah Ahmed", location: "Cairo, Egypt", message: "Always be thankful." },
    { id: 9, name: "Carlos Mendoza", location: "Mexico City, Mexico", message: "Stay blessed." },
    { id: 10, name: "Amina Yusuf", location: "Nairobi, Kenya", message: "May we all be united in peace." },
