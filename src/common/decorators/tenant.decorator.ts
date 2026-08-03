import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';

export const ExtractTenant = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const host = request.headers.host || ''; // e.g., app.clientdomain.com or client-slug.pi-scm.com
    const baseDomain = process.env.BASE_DOMAIN || 'pi-scm.com';

    if (!host) throw new BadRequestException('Missing Host Header');

    // CNAME / Custom Domain handling
    if (!host.endsWith(baseDomain)) {
      return { type: 'CUSTOM_DOMAIN', host };
    }

    // Subdomain routing (slug.pi-scm.com)
    const subdomain = host.split('.')[0];
    return { type: 'SUBDOMAIN', slug: subdomain };
  },
);
