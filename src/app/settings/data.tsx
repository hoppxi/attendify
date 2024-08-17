
interface settingsAppDataFormat {
    groupName: string;
    groupMembers: Array<{
        setting: string;
        description: string;
        icon: string;
        href?: string;
    }>
}

export const settingsAppData: Array<settingsAppDataFormat> = [
    {
        "groupName": "User Settings",
        "groupMembers": [
            { "setting": "Profile", "description": "Manage your profile settings", "icon": "account_circle" },
            { "setting": "Notification", "description": "Set your notification preferences", "icon": "notifications" },
            { "setting": "Privacy", "description": "Manage your privacy settings", "icon": "privacy_tip" },
            { "setting": "Account Settings", "description": "Manage your account settings", "icon": "settings" }
        ]
    },
    {
        "groupName": "System Configuration",
        "groupMembers": [
            { "setting": "Attendance Rules", "description": "Upload and manage your videos", "icon": "video_call" },
            { "setting": "QR Code Settings", "description": "Write and publish articles", "icon": "article" },
        ]
    },
    {
        "groupName": "Search and Discovery Settings",
        "groupMembers": [
            { "setting": "Search Filters", "description": "Customize your search filters", "icon": "filter_list" },
            { "setting": "Content Discovery", "description": "Manage your content discovery preferences", "icon": "explore" },
        ]
    },
    {
        "groupName": "Analytics Settings",
        "groupMembers": [
            { "setting": "Students Analytics", "description": "View your user engagement stats", "icon": "insights" },
            { "setting": "Branch Analytics", "description": "View analytics for your content", "icon": "bar_chart" },
            { "setting": "Performance Metrics", "description": "Track performance over time", "icon": "trending_up" },
        ]
    },
    {
        "groupName": "Customization Settings",
        "groupMembers": [
            { "setting": "Theme Settings", "description": "Customize the app theme", "icon": "palette" },
            { "setting": "Interface Settings", "description": "Set your interface color and other preferences", "icon": "view_quilt" }
        ]
    },
    {
        "groupName": "Security Settings",
        "groupMembers": [
            { "setting": "Data Privacy", "description": "Manage your data privacy settings", "icon": "lock" },
            { "setting": "Security Logs", "description": "View your security logs", "icon": "security" },
            { "setting": "Account Access Logs", "description": "Track account access history", "icon": "history" },
            { "setting": "Login Attempts", "description": "Monitor login attempts", "icon": "login" }
        ]
    },
    {
        "groupName": "Help and Support Settings",
        "groupMembers": [
            { "setting": "Help Center", "description": "Access help and support resources", "icon": "help_center", "href": "/helps" },
            { "setting": "Support Requests", "description": "Submit and track support requests", "icon": "support", "href": "/support" },
            { "setting": "FAQs", "description": "Browse frequently asked questions", "icon": "question_answer", "href": "/faqs" },
            { "setting": "User Guides", "description": "Access user guides and tutorials", "icon": "book", "href": "/user-guides" }
        ]
    }
]
