/**
 * Until release of the typings declaration, this is only to make sure that the VoxeetSDK can be safely referenced inside the test app
 * 
 * This declaration is not madantory and only there to facilitate auto completion
 */
export declare interface ActionBar {
    displayMute?: boolean;
    displaySpeaker?: boolean;
    displayCamera?: boolean;
    displayScreenShare?: boolean;
    displayLeave?: boolean;
}
export declare interface Overlay {
    backgroundMaximizedColor?: number;
    backgroundMinimizedColor?: number;
}
export declare interface Users {
    speakingUserColor?: number;
    selectedUserColor?: number;
}
export declare interface Configuration {
    actionBar?: ActionBar;
    overlay?: Overlay;
    users?: Users;
}

export declare enum UserType {
    USER = "user",
    LISTENER = "listener"
}
export declare interface JoinUserInfo {
    type?: UserType;
}
export declare interface JoinOptions {
    user?: JoinUserInfo;
}

export declare enum RTCPMode {
    WORST = "worst",
    AVERAGE = "average",
    BEST = "best"
}
export declare enum Mode {
    STANDARD = "standard",
    PUSH = "push"
}
export declare enum Codec {
    VP8 = "VP8",
    H264 = "H264"
}
export declare interface CreateParameters {
    ttl?: number;
    rtcpMode?: RTCPMode;
    mode?: Mode;
    videoCodec?: Codec;
    liveRecording?: boolean;
    dolbyVoice?: boolean;
    simulcast?: boolean;
}
export declare interface CreateOptions {
    alias?: string;
    params?: CreateParameters;
}
export declare interface CreateResult {
    conferenceId?: string;
    conferenceAlias?: string;
    isNew?: boolean;
}


export declare interface RefreshCallback {
    (): void;
}
export declare interface TokenRefreshCallback {
    (): Promise<string>;
}
export declare interface ConferenceStatusUpdated {
    state: string;
    conferenceAlias: string;
    conferenceId: string;
}
export declare interface ConferenceStatusUpdatedEventCallback {
    (): Promise<ConferenceStatusUpdated>;
}

export declare class VoxeetMedia {
    constructor();
    /**
     * Starts the video.
     */
    startVideo(usingFrontCamera: boolean): Promise<boolean>;
    /**
     * Stops the video.
     */
    stopVideo(): Promise<boolean>;
    /**
     * Switches the camera.
     */
    switchCamera(): Promise<boolean>;
}

export declare class UserInfo {
    name: string;
    externalId: string;
    avatarUrl: string | undefined;
    constructor(externalId: string, name: string, avatarUrl: string | undefined);
    json(): {
        name: string;
        externalId: string;
        avatarUrl: string | undefined;
    };
}

declare class VoxeetSDK {
    VoxeetMedia: VoxeetMedia;
    refreshAccessTokenCallback: RefreshCallback | null;
    refreshToken: TokenRefreshCallback | undefined;
    constructor();
    /**
     * Initializes the SDK using the customer key and secret.
     * @param consumerKey Consumer Key
     * @param consumerSecret Consumer Secret
     */
    initialize(consumerKey: string, consumerSecret: string): Promise<string>;
    /**
     * Initializes the SDK with an access token that is provided by the customer backend communicating with Voxeet servers.
     * @param accessToken Access token
     * @param refreshToken Callback to get a new access token after it expires
     */
    initializeToken(accessToken: string | undefined, refreshToken: TokenRefreshCallback): Promise<string>;
    /**
     * Opens a new session.
     * @param userInfo Participant information
     */
    connect(userInfo: UserInfo): Promise<string>;
    /**
     * Closes the current session.
     */
    disconnect(): Promise<string>;
    /**
     * Creates a conference.
     * @param options Options to use to create the conference
     */
    create(options: CreateOptions): Promise<CreateResult>;
    /**
     * Joins the conference.
     * @param conferenceId Id of the conference to join
     * @param options Options to use to join the conference
     */
    join(conferenceId: string, options?: JoinOptions): Promise<string>;
    /**
     * Joins the conference in the broadcaster mode which allows transmitting audio and video.
     * @param conferenceId Id of the conference to join
     */
    broadcast(conferenceId: string): Promise<string>;
    /**
     * Leaves the conference.
     */
    leave(): Promise<string>;
    /**
     * Invite a participant to the conference.
     * @param conferenceId Id of the conference to invite the participant to
     * @param participants List of participants to invite
     */
    invite(conferenceId: string, participants: Array<UserInfo>): Promise<string>;
    /**
     * Sends a broadcast message to the participants of the conference.
     * @param message Message to send to the other participants
     */
    sendBroadcastMessage(message: string): Promise<void>;
    /**
     * Sets if you want to enable audio 3D.
     * @param enabled True to enable audio 3D
     */
    setAudio3DEnabled(enabled: boolean): Promise<any>;
    /**
     * Is audio 3D enabled.
     */
    isAudio3DEnabled(): Promise<boolean>;
    /**
     * Sets the UI configuration.
     * @param configuration UI configuration
     */
    setUIConfiguration(configuration: Configuration): Promise<unknown>;
    /**
     * Sets if you want to enable the Telecom mode or not.
     * @param enabled True to enable the Telecom mode
     */
    setTelecomMode(enabled: boolean): Promise<any>;
    /**
     * Is telecom mode enabled.
     */
    isTelecomMode(): Promise<boolean>;
    /**
     * Sets if you want the UXKit to appear maximized or not.
     * @param maximized True to have the UXKit to appear maximized
     */
    appearMaximized(enabled: boolean): Promise<void>;
    /**
     * Use the built in speaker by default.
     * @param enable True to use the built in speaker by default
     */
    defaultBuiltInSpeaker(enabled: boolean): Promise<void>;
    /**
     * Sets the video on by default.
     * @param enable True to turn on the video by default
     */
    defaultVideo(enabled: boolean): Promise<void>;
    /**
     * Starts recording the conference.
     */
    startRecording(): Promise<void>;
    /**
     * Stops recording the conference.
     */
    stopRecording(): Promise<void>;
    /**
     * Minimize the overlay.
     */
    minimize(): Promise<void>;
    /**
     * Maximize the overlay.
     */
    maximize(): Promise<void>;
    /**
     * Activates or disable the screen auto lock. Android only.
     * @param activate True to activate the screen auto lock
     */
    screenAutoLock(enabled: boolean): Promise<any>;
    /**
     * @deprecated Android only.
     */
    isUserLoggedIn(): Promise<boolean>;
    /**
     * Checks if a conference is awaiting. Android only.
     */
    checkForAwaitingConference(): Promise<any>;
    /**
     * Get notified when the conference status changes.
     * @param callback function to call when the conference status changes.
     */
    onConferenceStatusUpdatedEvent(callback: ConferenceStatusUpdatedEventCallback): Promise<unknown>;
    /** @deprecated Use join() instead. */
    startConference(conferenceId: string, participants: Array<UserInfo>): Promise<any>;
    /** @deprecated Use leave() instead. */
    stopConference(): Promise<any>;
    /** @deprecated use connect instead. */
    openSession(userInfo: UserInfo): Promise<any>;
    /** @deprecated use disconnect instead. */
    closeSession(): Promise<any>;
    /** Internal method used to refresh tokens. */
    onAccessTokenOk(accessToken: string): Promise<unknown>;
    /** Internal method. */
    onAccessTokenKo(errorMessage: string): Promise<unknown>;
}

export const UserInfoClass: typeof UserInfo = (window as any).UserInfo;

export default (): VoxeetSDK => {
    return VoxeetSDK as any;
}