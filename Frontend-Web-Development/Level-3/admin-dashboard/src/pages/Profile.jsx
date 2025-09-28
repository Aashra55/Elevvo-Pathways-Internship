import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for saved data
  const [savedData, setSavedData] = useState(null);

  // State for password change
  const [changingPassword, setChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  // Save button handler
  const handleSave = () => {
    setSavedData({ name, email, password });
    setPassword(""); // clear password input after save
  };

  // Handle password change
  const handlePasswordChange = () => {
    setSavedData((prev) => ({ ...prev, password: newPassword }));
    setNewPassword("");
    setChangingPassword(false);
  };

  return (
    <motion.div
      className="bg-black text-white p-6 shadow rounded-lg w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-semibold mb-4 text-xl md:text-2xl">
        Profile Settings
      </h2>

      {/* Profile Form */}
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded text-white input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded text-white input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded text-white input"
          required
        />
        <button
          type="submit"
          className="px-4 md:px-8 py-2 rounded button font-bold"
        >
          Save
        </button>
      </form>

      {/* Display Saved Data */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg md:text-2xl">Saved Data:</h3>

        <AnimatePresence mode="wait">
          {savedData ? (
            <motion.div
              key="saved"
              className="mt-3 space-y-2 p-4 data-bg rounded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <p className="py-1">
                <span className="font-bold mr-2">Name:</span> {savedData.name}
              </p>
              <p className="py-1">
                <span className="font-bold mr-2">Email:</span> {savedData.email}
              </p>
              <p className="py-1 flex items-center">
                <span className="font-bold mr-2">Password:</span>
                <span className="italic text-gray-400">••••••••</span>
              </p>
              <button
                onClick={() => setChangingPassword(!changingPassword)}
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-sm rounded transition"
              >
                {changingPassword ? "Cancel" : "Change Password"}
              </button>

              <AnimatePresence>
                {changingPassword && (
                  <motion.div
                    key="change-pswrd"
                    className="mt-2 flex gap-2 md:gap-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full border p-2 rounded text-white new-pswrd mt-4"
                    />
                    <button
                      onClick={handlePasswordChange}
                      className="px-4 py-2 mt-4 rounded transition button"
                    >
                      Save
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.p
              key="no-data"
              className="mt-2 text-gray-400 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No data saved yet
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
