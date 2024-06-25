/**
 * Route Handlers allow you to create custom request 
 * handlers for a given route using the Web Request 
 * and Response APIs.
 * 
 * HTTP Methods
    * A route file allows you to create custom request handlers 
    * for a given route. The following HTTP methods are supported:
    * GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.
 */

export async function GET(request: Request) {}
 /**
  * 
  type Params = {
  team: string
   }
 
   export async function GET(request: Request, context: { params: Params }) {
      const team = context.params.team // '1'
   }
 
// Define params type according to your route parameters (see table below)
  */
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically
// implement `OPTIONS` and  set the appropriate Response `Allow`
// header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}

/**
 * Good to know: Route Handlers are only available inside the app directory.
 *  You do not need to use API Routes (pages) and Route Handlers (app) together,
 *  as Route Handlers should be able to handle all use cases.
 */