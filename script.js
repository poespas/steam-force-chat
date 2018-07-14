// ==UserScript==
// @name         Steam Force-chat
// @namespace    https://poespas.me
// @version      0.1
// @description  add button to profiles for beta-client
// @author       Poespas
// @match        https://steamcommunity.com/profiles/*
// @match        https://steamcommunity.com/id/*
// @grant        none
// ==/UserScript==

$J(".profile_header_actions").append($J("<a>", {class: "btn_profile_action btn_medium", href: "javascript:OpenFriendChat( '"+g_rgProfileData.steamid+"', 0 );"}).append($J("<span>", {text:"FC"})));