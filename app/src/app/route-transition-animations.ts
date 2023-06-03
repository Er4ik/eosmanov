import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations'; 

export const routeTransitionAnimations = trigger('triggerName', [
    transition(`work => resume, work => about, work => elunic, resume => work, resume => about, resume => elunic, 
    about => work, about => resume, about => elunic, elunic => work, elunic => resume, elunic => about`, [
        query(':enter, :leave', [
            style({
            })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':enter', [animate('1s ease-in', style({ opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);