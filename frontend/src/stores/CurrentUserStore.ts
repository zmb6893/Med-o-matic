import type { UserType } from "@/types/UserType";
import { defineStore } from "pinia";


export const useCurrentUserStore = defineStore('currentUserStore', {
	state: () => ({
		user: {
			name: 'Juliet Lam',
			role: 'OTHER'
		} as UserType
	}),

});