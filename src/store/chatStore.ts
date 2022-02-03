import { makeAutoObservable, makeObservable } from "mobx";

let instance: any;

class chatStore {
	constructor() {
		if (!instance) instance = this;
		makeAutoObservable(instance);
		return instance;
	}

	

	setShowEmojiPanel(value: boolean) {
		instance.showEmojiPanel = value;
	}

	getShowEmojiPanel() {
		return instance.showEmojiPanel;
	}

	setShowMessages(value: boolean) {
		instance.showMessages = value;
	}

}

export default new chatStore();
