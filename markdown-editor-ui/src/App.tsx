import styles from "./App.module.css";
import AppShell from "./components/AppShell/AppShell";

function App() {
  return (
    <AppShell>
      <div className={styles.container}>
        {/* Editor Section */}
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} app-heading-sm`}>
            MARKDOWN
          </div>
        </div>

        {/* Reader Section */}
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} app-heading-sm`}>
            PREVIEW
            <button className={styles.viewButton}>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8929 5.20135C15.3811 4.3137 12.5662 -0.140531 7.78409 0.00341151C3.36184 0.115367 0.802861 4.00182 0.107137 5.20135C-0.0357124 5.44877 -0.0357124 5.7536 0.107137 6.00103C0.610937 6.87268 3.30587 11.199 8.01599 11.199H8.21591C12.6382 11.087 15.2051 7.20055 15.8929 6.00103C16.0357 5.7536 16.0357 5.44877 15.8929 5.20135ZM8.17593 9.5996C4.7293 9.67957 2.48219 6.72874 1.77847 5.60119C2.57816 4.3137 4.66533 1.68274 7.86405 1.60278C11.2947 1.51481 13.5498 4.47363 14.2615 5.60119C13.4378 6.88867 11.3747 9.51963 8.17593 9.5996ZM8 2.8023C6.45422 2.8023 5.20111 4.0554 5.20111 5.60119C5.20111 7.14697 6.45422 8.40007 8 8.40007C9.54578 8.40007 10.7989 7.14697 10.7989 5.60119C10.7989 4.0554 9.54578 2.8023 8 2.8023ZM8 6.80071C7.33752 6.80071 6.80048 6.26367 6.80048 5.60119C6.80048 4.93871 7.33752 4.40166 8 4.40166C8.66248 4.40166 9.19952 4.93871 9.19952 5.60119C9.19952 6.26367 8.66248 6.80071 8 6.80071Z"
                  fill="#7C8187"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export default App;
