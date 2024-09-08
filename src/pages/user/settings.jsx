import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../component/settings/profile";
import Notification from "../../component/settings/notification";
import Support from "../../component/settings/support";

export default function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleTabChange = (tabName) => {
    navigate(`${location.pathname}?tab=${tabName}`, { replace: true });
    if (isMobile) {
      setIsSidebarVisible(false);
    }
	console.log(isSidebarVisible)
	
  };

  const handleBackToSidebar = () => {
    setIsSidebarVisible(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setIsSidebarVisible(true); // Reset sidebar visibility on screen resize
	  console.log(isSidebarVisible)
	  console.log(isMobile)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const activeTab = queryParams.get("tab") || "profile-setting";

    document.querySelectorAll('.setting-tab').forEach(tab => {
      tab.classList.toggle('active-agent', tab.dataset.tabName === activeTab);
    });

    document.querySelectorAll('.tab-container').forEach(tabContent => {
      tabContent.classList.toggle('hidden', tabContent.id !== activeTab);
    });

    if (!queryParams.has("tab")) {
      navigate(`${location.pathname}?tab=profile-setting`, { replace: true });
    }
  }, [location, navigate]);

  const sideMenu = [
    { name: 'Profile', query: "profile-setting" },
    { name: 'Notification', query: "notification" },
    { name: 'Help Desk', query: "help" },
    { name: 'Security', query: "security" }
  ];

  return (
    <>
      <div className="nk-content p-0">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className={`nk-chat ${isSidebarVisible ? "" : "hide-sidebar"}`}>
              <div className="nk-chat-aside">
                <div className="nk-chat-aside-head">
                  <div className="nk-chat-aside-user">
                    <h4 className="page-title chatbox-title cus-page-title my-2">
                      Settings
                    </h4>
                  </div>
                </div>
                <div className="nk-chat-aside-body" data-simplebar>
                  <div className="nk-chat-list pe-0 ps-3">
                    <ul className="chat-list">
                      {sideMenu.map((menu, index) => (
                        <li
                          data-tab-name={menu.query}
                          className={`chat-item setting-tab ${
                            new URLSearchParams(location.search).get("tab") === menu.query
                              ? "active-agent"
                              : ""
                          }`}
                          key={index}
                          onClick={() => handleTabChange(menu.query)}
                        >
                          <span className="chat-link chat-open">
                            <div className="chat-info">
                              <div className="chat-from">
                                <div className="name show">{menu.name}</div>
                              </div>
                            </div>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`nk-chat-body profile-shown ${!isSidebarVisible ? "show-content" : ""}`}>
                <div className="nk-chat-panel">
                  <div className="back-button" onClick={handleBackToSidebar}>Back</div>
                  <div id="start-chat" className="w-100 py-3">
                      <Profile />
                      <Notification />
                      <Support />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
