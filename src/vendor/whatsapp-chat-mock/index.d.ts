import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare type Direction = "ltr" | "rtl";

export declare type LoadedScenario = ScenarioFile & {
    header: ScenarioFile["header"] & {
        avatarUrl?: string;
    };
};

export declare type Message = {
    id: string;
    sender: "incoming" | "outgoing";
    text: string;
    timestamp: string;
    status?: "sent" | "delivered" | "read";
    replyTo?: {
        senderName: string;
        senderColor?: string;
        text: string;
    };
    reactions?: string[];
    typingDurationMs?: number;
    delayBeforeMs?: number;
};

export declare type MessageStatus = "sent" | "delivered" | "read";

export declare type ScenarioFile = {
    header: {
        name: string;
        subtitle?: string;
        unreadCount?: number;
        avatar?: string;
    };
    messages: ScenarioMessage[];
    direction?: Direction;
    statusBarTime?: string;
    showStatusBar?: boolean;
    showInputBar?: boolean;
    autoplay?: boolean;
    showControls?: boolean;
    syncStatusBarFromMessages?: boolean;
};

export declare type ScenarioMessage = {
    id: string;
    sender: "incoming" | "outgoing";
    text: string;
    timestamp: string;
    status?: MessageStatus;
    replyTo?: {
        senderName: string;
        senderColor?: string;
        text: string;
    };
    reactions?: string[];
    typingDurationMs?: number;
    delayBeforeMs?: number;
};

export declare function WhatsAppChat({ header, messages, direction, showStatusBar, statusBarTime, showInputBar, autoplay, showControls, syncStatusBarFromMessages, scale, className, }: WhatsAppChatProps): JSX_2.Element;

export declare type WhatsAppChatProps = {
    header: {
        avatarUrl?: string;
        name: string;
        subtitle?: string;
        unreadCount?: number;
    };
    messages: Message[];
    direction?: "ltr" | "rtl";
    showStatusBar?: boolean;
    statusBarTime?: string;
    showInputBar?: boolean;
    autoplay?: boolean;
    showControls?: boolean;
    /** When true, status bar clock follows message timestamps (idle = first message). When false, uses statusBarTime only. */
    syncStatusBarFromMessages?: boolean;
    /**
     * Scale factor applied to the phone frame via CSS transform.
     * 1 = full size (390×844 px), 0.8 = 80%, etc.
     * The outer container automatically shrinks to match so the component
     * never bleeds outside its natural layout box.
     */
    scale?: number;
    className?: string;
};

/**
 * Optional layout wrapper that replicates the original full-page demo look:
 * gray background, centered content, vertical scroll.
 *
 * Use this in a dev/preview page. For embedding inside a real site, use
 * <WhatsAppChat> directly (no background, no forced page layout).
 */
export declare function WhatsAppDemo({ children, className }: WhatsAppDemoProps): JSX_2.Element;

export declare type WhatsAppDemoProps = {
    children: ReactNode;
    className?: string;
};

export { }
