
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
            { "setting": "Account Settings", "description": "Manage your account settings", "icon": "settings", "href": "/settings/account" }
        ]
    },
    {
        "groupName": "System Configuration",
        "groupMembers": [
            { "setting": "Attendance Rules", "description": "Upload and manage your videos", "icon": "video_call" },
            { "setting": "QR Code Settings", "description": "Write and publish articles", "icon": "article", "href": "/settings/qr-code"},
        ]
    },
    {
        "groupName": "Search and Discovery Settings",
        "groupMembers": [
            { "setting": "Search Filters", "description": "Customize your search filters", "icon": "filter_list" },
            { "setting": "Query and Graphs", "description": "Manage your content discovery preferences", "icon": "explore", "href": "/settings/query"},
        ]
    },
    {
        "groupName": "Analytics Settings",
        "groupMembers": [
            { "setting": "Students Analytics", "description": "View your user engagement stats", "icon": "insights", "href": "/settings/analytics/students" },
            { "setting": "Branches Analytics", "description": "View analytics for your content", "icon": "bar_chart", "href": "/settings/analytics/branches" },
            { "setting": "Performance Metrics", "description": "Track performance over time", "icon": "trending_up", "href": "/settings/analytics/company" },
        ]
    },
    {
        "groupName": "Customization Settings",
        "groupMembers": [
            { "setting": "Theme Settings", "description": "Customize the app theme", "icon": "palette", "href": "/settings/theme" },
            { "setting": "Interface Settings", "description": "Set your interface color and other preferences", "icon": "view_quilt", "href": "/settings/interface" }
        ]
    },
    // {
    //     "groupName": "Security Settings",
    //     "groupMembers": [
    //         { "setting": "Data Privacy", "description": "Manage your data privacy settings", "icon": "lock" },
    //         { "setting": "Security Logs", "description": "View your security logs", "icon": "security" },
    //         { "setting": "Account Access Logs", "description": "Track account access history", "icon": "history" },
    //         { "setting": "Login Attempts", "description": "Monitor login attempts", "icon": "login" }
    //     ]
    // },
    {
        "groupName": "Help and Support Settings",
        "groupMembers": [
            { "setting": "Help Center", "description": "Access help and support resources", "icon": "help_center", "href": "/info/support/help" },
            { "setting": "Support Requests", "description": "Submit and track support requests", "icon": "support", "href": "/info/support/feedback" },
            { "setting": "User Guides", "description": "Access user guides and tutorials", "icon": "book", "href": "/info/support/guides" }
        ]
    }
]
