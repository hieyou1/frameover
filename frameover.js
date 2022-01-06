module.exports = {
    "create": (backgroundColor) => {
        return new Promise((resolve) => {
            let frame = document.createElement("iframe");
            frame.style.zIndex = 1000;
            frame.style.position = "absolute";
            frame.style.border = 0;
            frame.style.width = frame.style.height = "100%";
            frame.srcdoc = `<html><head></head><body style="background-color: ${backgroundColor}"></body></html>`;
            frame.onload = () => {
                let frameDestroyed = false;
                resolve({
                    "document": frame.contentDocument,
                    "window": frame.contentWindow,
                    "destroy": () => {
                        if (frameDestroyed) return;
                        frameDestroyed = true;
                        document.body.removeChild(frame);
                    },
                    "pause": () => {
                        if (frameDestroyed) throw new Error("Frame already destroyed");
                        frame.style.display = "none";
                    },
                    "resume": () => {
                        if (frameDestroyed) throw new Error("Frame already destroyed");
                        frame.style.display = "inherit";
                    }
                })
            };
            document.body.prepend(frame);
        });
    }
}