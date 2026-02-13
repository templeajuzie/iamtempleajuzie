// global.d.ts
declare module "@polar-sh/sdk/webhooks" {
  export const validateEvent: any;
  export const WebhookVerificationError: any;
}

declare module "sonner" {
  export const toast: any;
}