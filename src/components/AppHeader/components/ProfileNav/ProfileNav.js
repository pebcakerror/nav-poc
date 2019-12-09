import React from "react";
import { ToggleLayer } from "react-laag";

function ProfileNav() {
  return (
    <ToggleLayer
      renderLayer={({ isOpen, layerProps }) =>
        isOpen && (
          <div
            ref={layerProps.ref}
            className="layer"
            style={{
              ...layerProps.style,
              width: 150,
              height: 100,
              backgroundColor: "#e7f5ff",
              borderWidth: 1,
              borderColor: "#d8d6d9"
            }}
          >
            Layer
          </div>
        )
      }
      placement={{
        autoAdjust: true,
        triggerOffset: 10
      }}
    >
      {({ innerRef, toggle }) => (
        <button ref={innerRef} className="toggle-btn" onClick={toggle}>
          Toggle
        </button>
      )}
    </ToggleLayer>
  );
}

export default ProfileNav;
