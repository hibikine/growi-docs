(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{551:function(t,a,i){t.exports=i.p+"assets/img/ifttt-global-notification-introduction.81d0470c.png"},552:function(t,a,i){t.exports=i.p+"assets/img/ifttt-global-notification-addition.bb5a1c3c.png"},553:function(t,a,i){t.exports=i.p+"assets/img/ifttt-global-notification-detail-settings.0c0b5acb.png"},554:function(t,a,i){t.exports=i.p+"assets/img/slack2.29984604.png"},827:function(t,a,i){"use strict";i.r(a);var r=i(48),e=Object(r.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"外部ツールへの通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外部ツールへの通知","aria-hidden":"true"}},[t._v("#")]),t._v(" 外部ツールへの通知")]),t._v(" "),r("h2",{attrs:{id:"通知手段の種類"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通知手段の種類","aria-hidden":"true"}},[t._v("#")]),t._v(" 通知手段の種類")]),t._v(" "),r("h3",{attrs:{id:"概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),r("h3",{attrs:{id:"slack-bot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slack-bot","aria-hidden":"true"}},[t._v("#")]),t._v(" Slack bot")]),t._v(" "),r("h3",{attrs:{id:"slack-mattermost-incoming-webhook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slack-mattermost-incoming-webhook","aria-hidden":"true"}},[t._v("#")]),t._v(" Slack / Mattermost incoming webhook")]),t._v(" "),r("p",[t._v("GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。"),r("br"),t._v("\nワークスペースに属するチャンネルのいずれかを選択して通知を行う事ができます。")]),t._v(" "),r("h3",{attrs:{id:"ifttt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ifttt","aria-hidden":"true"}},[t._v("#")]),t._v(" IFTTT")]),t._v(" "),r("p",[t._v("GROWI では、IFTTT を利用して、その他の Web サービスに通知を行うことができます。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("IFTTT ご利用手順")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("GROWI 管理画面の「アプリ設定」 からメール設定を行う。")]),t._v(" "),r("ul",[r("li",[t._v("詳しくは、"),r("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/app-settings.html#メールの設定"}},[t._v("メール設定")]),t._v("をご覧ください。")],1)])]),t._v(" "),r("li",[r("p",[t._v("GROWI 管理画面の「通知設定」 から Global notification をクリックする。")]),t._v(" "),r("p",[r("img",{attrs:{src:i(551),alt:"ifttt-global-notification-introduction"}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("通知設定を追加")]),t._v(" をクリックする。")]),t._v(" "),r("p",[r("img",{attrs:{src:i(552),alt:"ifttt-global-notification-addition"}})])]),t._v(" "),r("li",[r("p",[t._v("トリガーパスを設定してください。")])]),t._v(" "),r("li",[r("p",[t._v("リンクから IFTTT のアプレットをお好みで作成してください。")])]),t._v(" "),r("li",[r("p",[t._v("通知先を "),r("strong",[t._v("Email")]),t._v(" とし、IFTTT のトリガーとなる Email を入力してください。")]),t._v(" "),r("ul",[r("li",[t._v("例: IFTTT の "),r("strong",[t._v("email")]),t._v(" をご利用の場合、trigger@applet.ifttt.com と入力します。")])])]),t._v(" "),r("li",[r("p",[t._v("GROWI 上での トリガーイベントを設定してください。")]),t._v(" "),r("p",[r("img",{attrs:{src:i(553),alt:"ifttt-global-notification-detail-settings"}})])]),t._v(" "),r("li",[r("p",[t._v("必要事項を入力したら、"),r("strong",[t._v("更新")]),t._v("を押してください。")])])])])]),t._v(" "),r("h2",{attrs:{id:"通知内容の種類-設定方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通知内容の種類-設定方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 通知内容の種類 / 設定方法")]),t._v(" "),r("h2",{attrs:{id:"概要-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),r("h2",{attrs:{id:"user-trigger-notification-設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-trigger-notification-設定","aria-hidden":"true"}},[t._v("#")]),t._v(" User Trigger Notification 設定")]),t._v(" "),r("p",[t._v("User Trigger Notification は、GROWI を利用するユーザーがページの編集やコメントの投稿を行う際に選択的に通知を行う事ができる機能です。\n基本的には通知先のチャンネルを都度入力する必要がありますが、デフォルトパターンを設定することで入力を省くことが可能です。")]),t._v(" "),r("h3",{attrs:{id:"デフォルトパターンの設定方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトパターンの設定方法","aria-hidden":"true"}},[t._v("#")]),t._v(" デフォルトパターンの設定方法")]),t._v(" "),r("ol",[r("li",[t._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")]),t._v(" "),r("li",[t._v("User Trigger Notification のタブを開きます。")]),t._v(" "),r("li",[t._v("パターンとチャンネル名を入力します。")])]),t._v(" "),r("ul",[r("li",[t._v("設定値を表示するパスをパターンといいます。例えば "),r("code",[t._v("/event/*")]),t._v(" と設定した場合 event 配下のページのみに設定したデフォルトパターンが表示されます。")]),t._v(" "),r("li",[t._v("全てのページにデフォルトパターン表示したい場合は "),r("code",[t._v("/*")]),t._v(" と入力してください。")])]),t._v(" "),r("h3",{attrs:{id:"デフォルトパターン設定が反映されているかの確認"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトパターン設定が反映されているかの確認","aria-hidden":"true"}},[t._v("#")]),t._v(" デフォルトパターン設定が反映されているかの確認")]),t._v(" "),r("p",[t._v("例えば、パターンを "),r("code",[t._v("/event/*")]),t._v(" チャンネルを "),r("code",[t._v("general")]),t._v(" と設定した場合、"),r("br"),t._v(" "),r("code",[t._v("/event/忘年会のお知らせ")]),t._v("というパスのページを作成すると Slack 通知フォームに "),r("code",[t._v("general")]),t._v(" が設定された状態で編集モードに遷移します。")]),t._v(" "),r("p",[r("img",{attrs:{src:i(554),alt:"slack2"}})]),t._v(" "),r("p",[t._v("チェックボックスを有効にした状態でページを更新した場合、 "),r("code",[t._v("general")]),t._v(" チャンネルに Slack 通知が届きます。")]),t._v(" "),r("h2",{attrs:{id:"global-notification-設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-notification-設定","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Notification 設定")]),t._v(" "),r("p",[t._v("Wiki 利用者が所定のアクションをしたタイミングで発信される Slack 通知を設定できます。")]),t._v(" "),r("h3",{attrs:{id:"global-notification-の設定方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-notification-の設定方法","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Notification の設定方法")]),t._v(" "),r("ol",[r("li",[t._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")]),t._v(" "),r("li",[t._v("Global Notification のタブを開きます。")]),t._v(" "),r("li",[t._v("通知設定の一覧の右側にある通知設定の追加ボタンを押します。")]),t._v(" "),r("li",[t._v("通知詳細設定で各種設定を行います。")])]),t._v(" "),r("ul",[r("li",[t._v("通知機構はトリガーパスで起きるイベントを感知します。"),r("br"),t._v("\n例えば "),r("code",[t._v("/event/*")]),t._v(" と設定した場合、"),r("code",[t._v("/event")]),t._v(" 配下のページで Global Notification が有効になります。")])]),t._v(" "),r("h3",{attrs:{id:"通知の有効-無効"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通知の有効-無効","aria-hidden":"true"}},[t._v("#")]),t._v(" 通知の有効 / 無効")]),t._v(" "),r("p",[t._v("Global Notification は通常 public なページ内のイベントのみ通知が届きます。")]),t._v(" "),r("p",[t._v("チェックボックスを有効にすることで以下のページ内のイベントを感知するようになります。")]),t._v(" "),r("ul",[r("li",[t._v("'自分のみ'に閲覧制限をしているページ")]),t._v(" "),r("li",[t._v("'特定グループにのみ'に閲覧制限をしているページ")])]),t._v(" "),r("p",[t._v("link を知っている人のみ閲覧できるページは設定に関わらず常に通知されません。")])])},[],!1,null,null,null);a.default=e.exports}}]);