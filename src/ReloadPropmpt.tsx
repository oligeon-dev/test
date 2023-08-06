import { useRegisterSW } from "virtual:pwa-register/react";
import "./ReloadPrompt.css";
import { useEffect } from "react";
export const ReloadPrompt = () => {
  //   const intervalMS = 2 * 60 * 1000;
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);

      //   r &&
      //     setInterval(() => {
      //       r.update();
      //     }, intervalMS);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  useEffect(() => {
    setNeedRefresh(true);
  }, []);

  const close = () => {
    setNeedRefresh(false);
  };

  return (
    <div className="ReloadPrompt-container">
      {needRefresh && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            <span>
              New content available, click on reload button to update.
            </span>
          </div>

          <button
            className="ReloadPrompt-toast-button"
            onClick={() => updateServiceWorker(true)}
          >
            Reload
          </button>

          <button className="ReloadPrompt-toast-button" onClick={() => close()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};
