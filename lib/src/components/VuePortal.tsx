import { useEffect, useState } from "react";
import { createApp, h, Slot } from "vue";

export interface VuePortalProps {
	slot?: Slot,
}

let id = 0;

export function VuePortal(props: VuePortalProps): JSX.Element {
	const { slot } = props;

	const [vvId] = useState(id++);
	const [container, setContainer] = useState<Element | null>(null);

	useEffect(() => {
		if (slot && container) {
			console.debug("vue portal - create app");
			const app = createApp({
				render() {
					console.debug("vue portal - render");
					return h("span", {}, [
						slot()
					]);
				}
			});
			app.mount(container);
			return () => {
				app.unmount();
			}
		}
	}, [slot, container]);

	if (!slot)
		return <></>;

	return <div id={`vv${vvId}`} ref={setContainer} />;
}