export class TenantContextPayload {
  type!: 'SUBDOMAIN' | 'CUSTOM_DOMAIN';
  slug?: string;
  host?: string;
}
