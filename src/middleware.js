// import { NextResponse } from 'next/server';

// export function middleware(request) {
//     const authtoken = request.cookies.get('Authtoken')?.value;
//     const { pathname } = request.nextUrl;

//     if (pathname === '/api/login'|| pathname === '/api/users') {
//         return NextResponse.next();
//     }

//     if (pathname === '/login' || pathname === '/signup') {
//         if (authtoken) {
//             return NextResponse.redirect(new URL('/profile/user', request.url));
//         }
//         return NextResponse.next();
//     }

//     const protectedRoutes = ['/', '/add-task', '/show-task', '/profile'];
//     if (protectedRoutes.some(route => pathname.startsWith(route))) {
//         if (!authtoken) {
//             if(request.pathname.startsWith('/api'))
//             {
//                 return NextResponse.json({  message:"deny",
//                     success:false,
//                    },{
//                        status:401
//                    });
//             }
//             return NextResponse.redirect(new URL('/login', request.url));
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: [
//         '/',
//         '/login',
//         '/signup',
//         '/add-task',
//         '/show-task',
//         '/api/:path*',
//         '/profile/:path*',
//     ],
// };
import { NextResponse } from 'next/server';

export function middleware(request) {
    const authtoken = request.cookies.get('Authtoken')?.value;
    const { pathname } = request.nextUrl;

    if (pathname === '/api/login' || pathname === '/api/users') {
        return NextResponse.next();
    }

    if (pathname === '/login' || pathname === '/signup') {
        if (authtoken) {
            return NextResponse.redirect(new URL('/profile/user', request.url));
        }
        return NextResponse.next();
    }

    const protectedRoutes = ['/', '/add-task', '/show-task', '/profile'];
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!authtoken) {
            if (pathname.startsWith('/api')) {
                return NextResponse.json({
                    message: "deny",
                    success: false,
                }, {
                    status: 401
                });
            }
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/add-task',
        '/show-task',
        '/api/:path*',
        '/profile/:path*',
    ],
};
