// permissions.js
export const ROLES = {
	HR: "hr",
	INTERVIEWER: "interviewer",
	CANDIDATE: "candidate"
  };
  
  export const PERMISSIONS = {
	CREATE_EVENT: "create:event",
	ADD_CANDIDATE: "add:candidate",
	VIEW_EVENTS: "view:events",
	SUBMIT_FEEDBACK: "submit:feedback"
  };
  
  // map roles to permissions
  export const ROLE_PERMISSIONS = {
	[ROLES.HR]: [
	  PERMISSIONS.CREATE_EVENT,
	  PERMISSIONS.ADD_CANDIDATE,
	  PERMISSIONS.VIEW_EVENTS
	],
	[ROLES.INTERVIEWER]: [
	  PERMISSIONS.VIEW_EVENTS,
	  PERMISSIONS.SUBMIT_FEEDBACK
	],
	[ROLES.CANDIDATE]: [PERMISSIONS.VIEW_EVENTS]
  };
  